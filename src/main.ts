import * as readline from 'readline';

/* ここに処理を書く */
const main = (args: any[]) => {
    console.log(args);
} 

/* 標準入力処理 */
const stdin = (main: Function) => {
    const args: any[] = [];
    const reader = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    reader.on('line', function (line: any) {
        line
            .split(" ")
            .forEach((arg: any) => {
                args.push(isNaN(arg) ? arg : Number(arg));
            });
    });
    reader.on('close', function () {
        main(args);
    });
}
/* 実行 */
stdin(main);