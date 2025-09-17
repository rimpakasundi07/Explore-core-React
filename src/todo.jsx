// export default function ToDo({ task, isDone }) {
//   props.task = "JS";
//   return <li>Task:{task} </li>;
// }

// ---------------------->>>>>>>>>>>>>>>

// export default function ToDo({ task, isDone }) {
//   if (isDone === true) {
//     return <li>Done : {task}</li>;
//   } else {
//     return <li>Pending: {task} </li>;
//   }
// }

// ---------------------->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// export default function ToDo({ task, isDone, time = 0 }) {
//   if (isDone === true) {
//     return (
//       <li>
//         Done : {task} Duration:{time}
//       </li>
//     );
//   }
//   return <li>To be done: {task} </li>;
// }

// ---------->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//----------------- CONDITIONAL RENDERING : OPTION 3 Ternary-----------------------

// condition ? true : false

// export default function ToDo({ task, isDone, time = 0 }) {
//   return isDone ? (
//     <li>
//       Done : {task} time: {time}{" "}
//     </li>
//   ) : (
//     <li>Not Done: {task} </li>
//   );
// }

// ------------------------------------------->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// ---------------------  CONDITIONAL RENDERING  :  OPTION 4 &&

// export default function ToDo({ task, isDone, time = 0 }) {
//   return (
//     isDone && (
//       <li>
//         Done Task : {task} time:{time}
//       </li>
//     )
//   );
// }

// -------------------------------------------------------------------------------------->>

//---------------------  CONDITIONAL RENDERING  :  OPTION 5 ||

// export default function ToDo({ task, isDone, time = 0 }) {
//   return (
//     isDone || (
//       <li>
//         Not Done Task : {task} time: {time}
//       </li>
//     )
//   );
// }

// -------------------------------------------------------------------------------------->>
//---------------------  CONDITIONAL RENDERING  :  OPTION 6 use variable
export default function ToDo({ task, isDone, time }) {
  const displayTime = time ? time : 100;
  let listItem;

  if (isDone === true) {
    listItem = (
      <li>
        Done: {task} time: {displayTime}
      </li>
    );
  } else {
    return (
      <li>
        Pending: {task} time:{displayTime}
      </li>
    );
  }
  return listItem;
}
