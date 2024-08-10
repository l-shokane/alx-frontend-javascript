export default function taskBlock(trueOrfalse) {
    let task = false;
    let task2 = true;

if(trueOrfalse) {
    let task = true;
    let task2 = false;
}
return [task, task2];
}