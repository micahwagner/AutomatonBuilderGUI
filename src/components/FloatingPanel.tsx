interface FloatingPanelProps {
    heightPolicy: string
}

export default function FloatingPanel(props: React.PropsWithChildren<FloatingPanelProps>) {
    return (<div className={`z-50 bg-gray-300/50 w-fit h-${props.heightPolicy} p-2 m-5 rounded-lg backdrop-blur-xl shadow-xl resize-x`}>
        {props.children}
    </div>);
}