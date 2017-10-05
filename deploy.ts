import { execSync } from 'child_process'

const exec = (cmd:string) => execSync(cmd, { stdio: 'inherit'});

exec('rm -rf public && rm -rf db.json');
exec('hexo generate');
exec('firebase use machinelabs-docs-production && firebase deploy');