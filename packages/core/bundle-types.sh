#!/bin/bash

yarn dts-bundle-generator --disable-symlinks-following -o types/temp.d.ts src/index.ts 
sed -ie '/import { Snowflake } from '"'"'discord-api-types\/globals'"'"'/d' types/temp.d.ts
sed -ie 's/export declare/export/g' types/temp.d.ts
sed -ie 's/declare/export/g' types/temp.d.ts

echo 'declare module "@discord-interactions/core" {' > types/index.d.ts
cat types/temp.d.ts >> types/index.d.ts
echo '}' >> types/index.d.ts

rm types/temp.d.ts