import { nodeResolve } from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';

/** 
 *  @type {import('rollup').RollupOptions}
*/

const obj = {
    input: 'src/main.ts',
    output: { file: 'bundle.js'},
    plugins: [
        nodeResolve(),
        typescript(),
    ]
}

export default obj;