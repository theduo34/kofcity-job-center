import {Card} from "antd";
import React from "react";

export interface JybekCardProps {
  children: React.ReactNode,
  loading?: boolean,
  hoverable?: boolean,
  onClick?: () => void,
  size?: "default" | "small",
  bordered?: boolean,
  style?: React.CSSProperties,
  type?: "inner" | undefined,
  cover?: React.ReactNode,
  actions?: React.ReactNode[],
  className?: string,
  title?: React.ReactNode,
  key?: string,
}

/**
 * Renders a Jybek card component with customizable properties.
 *
 * @param {JybekCardProps} props - An object containing properties for the Jybek card component.
 * @return {React.ReactNode} The rendered Jybek card component.
 */
const KjcCard = (props: JybekCardProps): React.ReactNode => {
  return(
    <>
      <Card
        hoverable={props.hoverable}
        loading={props.loading}
        onClick={props.onClick}
        size={props.size}
        bordered={props.bordered}
        style={{
        ...props.style,
      }}
        type={props.type}
        cover={props.cover}
        actions={props.actions}
        className={props.className}
        title={props.title}
        key={props.key}
      >
        {props.children}
      </Card>
    </>
  )
}


export default KjcCard;