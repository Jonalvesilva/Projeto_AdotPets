import { Link } from "react-router-dom";

type tipo = {
  to: string;
  className?: string;
  children: any;
  onclick?: any;
};

export function LinkButton(props: tipo) {
  return (
    <Link to={props.to} className={props.className} onClick={props.onclick}>
      {props.children}
    </Link>
  );
}
