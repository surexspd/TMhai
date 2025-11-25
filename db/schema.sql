
CREATE TABLE IF NOT EXISTS leads(
 id serial PRIMARY KEY,
 name text, phone text, email text, notes text,
 status text DEFAULT 'new',
 created_at timestamptz DEFAULT now()
);