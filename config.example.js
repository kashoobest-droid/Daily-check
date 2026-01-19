// config.example.js
// Copy this file to config.js and fill in your actual Supabase credentials

const SUPABASE_CONFIG = {
    // ⚠️ REPLACE THESE WITH YOUR ACTUAL SUPABASE CREDENTIALS ⚠️
    url: 'https://your-project-id.supabase.co',  // Your Supabase project URL
    anonKey: 'your-anon-key-here'                // Your anon public key
};

// Don't edit below this line
if (typeof module !== 'undefined' && module.exports) {
    module.exports = SUPABASE_CONFIG;
}
