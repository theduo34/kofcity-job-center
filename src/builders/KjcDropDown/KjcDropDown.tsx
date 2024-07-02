import {Dropdown, MenuProps} from "antd";
import React from "react";

export interface JybekDropDownProps {
  arrow?: boolean | { pointAtCenter: boolean }
  autoAdjustOverflow?: boolean
  autoFocus?: boolean
  disabled?: boolean
  destroyPopupOnHide?: boolean
  getPopupContainer?: (triggerNode: HTMLElement) => HTMLElement
  mouseEnterDelay?: number
  mouseLeaveDelay?: number
  placement?: "topLeft" | "topCenter" | "topRight" | "bottomLeft" | "bottomCenter" | "bottomRight"
  trigger?: ("click" | "hover" | "contextMenu")[]
  menu?: MenuProps
  open?: boolean
  onOpenChange?: ()=>void
  children?: React.ReactNode
}
const KjcDropDown = (props: JybekDropDownProps ) => {

  return (
    <>
      <Dropdown
        arrow={props.arrow}
        autoAdjustOverflow={props.autoAdjustOverflow}
        autoFocus={props.autoFocus}
        disabled={props.disabled}
        destroyPopupOnHide={props.destroyPopupOnHide}
        getPopupContainer={props.getPopupContainer}
        mouseEnterDelay={props.mouseEnterDelay}
        mouseLeaveDelay={props.mouseLeaveDelay}
        placement={props.placement}
        trigger={props.trigger}
        menu={props.menu}
        open={props.open}
        onOpenChange={props.onOpenChange}
      >
        {props.children}
      </Dropdown>
    </>
  )
}

export default KjcDropDown;
