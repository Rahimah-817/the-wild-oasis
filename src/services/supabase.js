import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = 'https://lxuygwmadrwbjnrhxtik.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx4dXlnd21hZHJ3Ympucmh4dGlrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjI2NTc3MzcsImV4cCI6MjAzODIzMzczN30.PBmXd0tQZwvFvER0m-8tdxHoLusJi6K2WOEZ6-EQ3LA';

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
