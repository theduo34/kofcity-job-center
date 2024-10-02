import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Modal, Button } from "antd";
import {DownOutlined, UserOutlined} from "@ant-design/icons";
import { LogOut } from 'lucide-react';
import { USER_PROFILE_PATH, USER_ROUTE_PATH } from "../../../users/JobSeeker/UserRoutes.constants.ts";
import {useAuth} from "../../../shared/authContext/AuthContext.tsx";

const LeftHeaderIcons = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const navigate = useNavigate();
    const { logout } = useAuth();

    // Show the logout confirmation modal
    const showModal = () => {
        setIsModalVisible(true);
    };

    //  logout confirmation
    const handleOk = async () => {
        try {
            window.localStorage.clear();

            if (logout) {
                await logout();
            }
            setIsModalVisible(false);
            navigate('/');
        } catch (error) {
            console.error("Error during logout:", error);
        }
    };

    // Handle modal cancellation
    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
        <div className="flex items-center justify-between space-x-6">
            {/* Logout Button */}
            <div className="flex items-center justify-center space-x-1 cursor-pointer" onClick={showModal}>
                <LogOut size={20} />Logout
            </div>

            {/* User Profile Button */}
            <div className="relative text-xs p-3 rounded-full bg-neutral-200">
                <div className="flex items-center justify-center"
                     onClick={() => navigate(`${USER_ROUTE_PATH}${USER_PROFILE_PATH}`)}
                >
                    <UserOutlined style={{ fontSize: "24px" }} />
                    <span
                        className="absolute bottom-1 right-0 flex items-center justify-center p-1 font-semibold rounded-full bg-white shadow-lg">
                            <DownOutlined style={{ fontSize: "10px" }} />
                        </span>
                </div>
            </div>

            {/* Logout Confirmation Modal */}
            <Modal
                title="LOGOUT CONFIRMATION"
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
                centered
                width={500}
                footer={[
                    <Button key="cancel" onClick={handleCancel}>
                        No
                    </Button>,
                    <Button key="ok" type="primary" danger onClick={handleOk}>
                        Yes
                    </Button>,
                ]}
            >
                <p className="pb-10 text-lg font-semibold">Are you sure you want to log out?</p>
            </Modal>
        </div>
    );
};

export default LeftHeaderIcons;
