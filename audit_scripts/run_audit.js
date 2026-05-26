// run_audit.js
// Orchestrates the audit scripts for the Aurelius application.
// Exits with code 0 if all scripts succeed, otherwise exits with code 1.

const { execSync } = require('child_process');
const path = require('path');

const scripts = [
  'auth_flow_test.js',
  'data_sync_test.js',
  'ui_visual_test.js',
  'locale_test.js',
  'voice_command_test.js',
  'security_test.js',
];

let allPassed = true;

for (const script of scripts) {
  const scriptPath = path.join(__dirname, script);
  try {
    console.log(`Running ${script}...`);
    execSync(`node ${scriptPath}`, { stdio: 'inherit' });
  } catch (err) {
    console.error(`❌ ${script} failed.`);
    allPassed = false;
    // Continue to run remaining scripts to collect all failures.
  }
}

if (allPassed) {
  console.log('✅ All audit scripts passed.');
  process.exit(0);
} else {
  console.error('⚠️ Some audit scripts failed. See above for details.');
  process.exit(1);
}
