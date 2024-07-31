import supabase, { supabaseUrl } from './supabase';

export async function getCabins() {
  const { data, error } = await supabase.from('cabins').select('*');

  if (error) {
    console.error(error);
    throw new Error('Cabins could not be loaded');
  }

  return data;
}

export async function createEditCabin(newCabin, id) {
  if (!newCabin.image) {
    throw new Error('Image is required for the cabin.');
  }

  const hasImagePath =
    typeof newCabin.image === 'string' &&
    newCabin.image.startsWith(supabaseUrl);
  const imageName = `${Date.now()}-${newCabin.image.name}`.replaceAll('/', '');
  const imagePath = hasImagePath
    ? newCabin.image
    : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

  let query = supabase.from('cabins');
  const cabinData = { ...newCabin, image: imagePath };

  if (!id) {
    query = query.insert([cabinData]);
  } else {
    query = query.update(cabinData).eq('id', id);
  }

  const { data, error } = await query.select().single();
  if (error) {
    console.error(error);
    throw new Error('Cabin could not be created or updated!');
  }

  const { error: storageError } = await supabase.storage
    .from('cabin-images')
    .upload(imageName, newCabin.image);

  if (storageError) {
    if (data) {
      await supabase.from('cabins').delete().eq('id', data.id);
    }
    console.error(storageError);
    throw new Error(
      'Cabin image upload failed, and the cabin has been deleted.'
    );
  }

  return data;
}

 
