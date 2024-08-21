import { Spin } from "antd";
import { useState, useEffect } from "react";

const SpinnerOverlay = ({ spinning }: { spinning: boolean }) => {
    const [loadingMessage, setLoadingMessage] = useState("Loading");

    useEffect(() => {
        if (spinning) {
            const timer = setTimeout(() => {
                setLoadingMessage("Setting up your account, please wait...");
            }, 2000);

            return () => clearTimeout(timer);
        }
    }, [spinning]);

    if (!spinning) return null;

    return (
        <div
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100vw",
                height: "100vh",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                zIndex: 9999,
            }}
        >
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Spin size="large" />
                <div style={{ marginTop: 10, color: "#fff", fontSize: "1.2em" }}>
                    {loadingMessage}
                </div>
            </div>
        </div>
    );
};

export default SpinnerOverlay;
