import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = 'https://xbpkftysixvdbudnvpcd.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhicGtmdHlzaXh2ZGJ1ZG52cGNkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjE0NjExMDksImV4cCI6MjAzNzAzNzEwOX0.o8DVpVgyicgKvcX6tO28a9Z_OltQEWP4bcW1pihMjac';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
