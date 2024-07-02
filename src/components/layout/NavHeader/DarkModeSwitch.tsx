import { theme as antdTheme, Tooltip } from 'antd';
import {useTheme} from "../../../theme/ThemeContext.tsx";
import {UilMoon, UilSun} from '@iconscout/react-unicons';

const DarkModeSwitch = () => {
    const {
        token: { colorBgContainer },
    } = antdTheme.useToken();
    const { theme, toggleTheme } = useTheme();
    const toggleDarkMode = () => {
        toggleTheme();
    };

    return (
        <div className="flex items-center">
            <Tooltip
                title={theme === 'light' ? 'Enable Dark Mode' : 'Disable Dark Mode'}
                mouseEnterDelay={0.7}
                overlayStyle={{ backgroundColor: colorBgContainer }}
                overlayInnerStyle={{ fontSize: '12px' }}
            >
                <input
                    type="checkbox"
                    id="darkModeSwitch"
                    className="hidden"
                    checked={theme === 'dark'}
                    onChange={toggleDarkMode}
                />
                <label
                    htmlFor="darkModeSwitch"
                    className="flex items-center cursor-pointer"
                    data-tip={theme === 'light' ? 'Enable Dark Mode' : 'Disable Dark Mode'}
                >
                    <div className={`relative w-10 h-5 transition-colors duration-300 ${theme === 'dark' ? 'bg-gray-700' : 'bg-yellow-300'} ease-in-out rounded-full shadow-inner dark:bg-gray-600`}>
                        <div
                            className={`absolute w-5 h-5 transition-transform duration-300 ease-in-out rounded-full shadow-md transform ${
                                theme === 'dark' ? 'bg-OIT-CORNFLOWER-BLUE' : 'translate-x-5 bg-OIT-CRIMSON-RED'
                            }`}
                        />
                        {theme === 'dark' ? (
                            <UilSun className="absolute text-gray-300 size-4 left-[28px] -ml-1" style={{ marginTop: '2px' }} />
                        ) : (
                            <UilMoon className="absolute text-orange-600 size-4 left-1.5 -ml-1" style={{ marginTop: '2px' }} />
                        )}
                    </div>
                </label>
            </Tooltip>
        </div>
    );
};

export default DarkModeSwitch;
