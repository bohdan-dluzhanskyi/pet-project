import css from "./WorkflowItem.module.css";

interface WorkflowItemProp {
  title: string;
  text: string;
  icon: string;
}
export default function WorkflowItem({ title, text, icon }: WorkflowItemProp) {
  return (
    <li className={css.itemContainer}>
      <span className={css.itemIcon}>
        <svg className={css.icon} viewBox="0 0 32 32">
          <use href={icon}></use>
        </svg>
      </span>
      <div className={css.itemFlex}>
        <h3 className={css.itemTitle}>{title}</h3>
        <p className={css.itemText}>{text}</p>
      </div>
    </li>
  );
}
