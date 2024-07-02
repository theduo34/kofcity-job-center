import {Modal, ModalProps} from "antd";

export interface JybekModalProps extends Partial<ModalProps> {
  open?: boolean,
  onOk?: () => void,
  onCancel?: () => void,
  afterClose?: () => void,
  centered?: boolean,
  closeIcon?: React.ReactNode,
  closable?: boolean,
  destroyOnClose?: boolean,
  footer?: React.ReactNode,
  keyboard?: boolean,
  mask?: boolean,
  maskClosable?: boolean,
  maskTransitionName?: string,
  okText?: string,
  okType?: "primary" | "danger" | "dashed" | "link" | "text" | "default" | undefined,
  title?: React.ReactNode,
  transitionName?: string,
  width?: string | number,
  zIndex?: number,
  className?: string,
  children?: React.ReactNode,
  style?: React.CSSProperties,
  key?: string
}
const KjcModal = (props: JybekModalProps) => {
  return (
    <>
      <Modal
        open={props.open}
        onOk={props.onOk}
        onCancel={props.onCancel}
        afterClose={props.afterClose}
        centered={props.centered}
        closeIcon={props.closeIcon}
        closable={props.closable}
        destroyOnClose={props.destroyOnClose}
        footer={props.footer}
        keyboard={props.keyboard}
        mask={props.mask}
        maskClosable={props.maskClosable}
        style={props.style}
        maskTransitionName={props.maskTransitionName}
        okText={props.okText}
        okType={props.okType}
        title={props.title}
        transitionName={props.transitionName}
        width={props.width}
        zIndex={props.zIndex}
      >
        {props.children}
      </Modal>
    </>
  )
}

export default KjcModal;