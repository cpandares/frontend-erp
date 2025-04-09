import PerfectScrollbar from 'react-perfect-scrollbar';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom';

import AnimateHeight from 'react-animate-height';

import { IRootState } from '../../../store';
import { toggleSidebar } from '../../../store/themeConfigSlice';
import { useState, useEffect } from 'react';
import IconCaretDown from '../../../common/Icon/IconCaretDown';
import IconCaretsDown from '../../../common/Icon/IconCaretsDown';
import IconMinus from '../../../common/Icon/IconMinus';
import IconMenuAuthentication from '../../../common/Icon/Menu/IconMenuAuthentication';
import IconMenuCalendar from '../../../common/Icon/Menu/IconMenuCalendar';
import IconMenuCharts from '../../../common/Icon/Menu/IconMenuCharts';
import IconMenuChat from '../../../common/Icon/Menu/IconMenuChat';
import IconMenuComponents from '../../../common/Icon/Menu/IconMenuComponents';
import IconMenuContacts from '../../../common/Icon/Menu/IconMenuContacts';
import IconMenuDashboard from '../../../common/Icon/Menu/IconMenuDashboard';
import IconMenuDatatables from '../../../common/Icon/Menu/IconMenuDatatables';
import IconMenuDocumentation from '../../../common/Icon/Menu/IconMenuDocumentation';
import IconMenuDragAndDrop from '../../../common/Icon/Menu/IconMenuDragAndDrop';
import IconMenuElements from '../../../common/Icon/Menu/IconMenuElements';
import IconMenuFontIcons from '../../../common/Icon/Menu/IconMenuFontIcons';
import IconMenuForms from '../../../common/Icon/Menu/IconMenuForms';
import IconMenuInvoice from '../../../common/Icon/Menu/IconMenuInvoice';
import IconMenuMailbox from '../../../common/Icon/Menu/IconMenuMailbox';
import IconMenuNotes from '../../../common/Icon/Menu/IconMenuNotes';
import IconMenuPages from '../../../common/Icon/Menu/IconMenuPages';
import IconMenuScrumboard from '../../../common/Icon/Menu/IconMenuScrumboard';
import IconMenuTables from '../../../common/Icon/Menu/IconMenuTables';
import IconMenuTodo from '../../../common/Icon/Menu/IconMenuTodo';
import IconMenuUsers from '../../../common/Icon/Menu/IconMenuUsers';
import IconMenuWidgets from '../../../common/Icon/Menu/IconMenuWidgets';

const Sidebar = () => {
    const [currentMenu, setCurrentMenu] = useState<string>('');
    const [errorSubMenu, setErrorSubMenu] = useState(false);
    const themeConfig = useSelector((state: IRootState) => state.themeConfig);
    const semidark = useSelector((state: IRootState) => state.themeConfig.semidark);
    const location = useLocation();
    const dispatch = useDispatch();
    const { t } = useTranslation();
    const toggleMenu = (value: string) => {
        setCurrentMenu((oldValue) => {
            return oldValue === value ? '' : value;
        });
    };

    useEffect(() => {
        const selector = document.querySelector('.sidebar ul a[href="' + window.location.pathname + '"]');
        if (selector) {
            selector.classList.add('active');
            const ul: any = selector.closest('ul.sub-menu');
            if (ul) {
                let ele: any = ul.closest('li.menu').querySelectorAll('.nav-link') || [];
                if (ele.length) {
                    ele = ele[0];
                    setTimeout(() => {
                        ele.click();
                    });
                }
            }
        }
    }, []);

    useEffect(() => {
        if (window.innerWidth < 1024 && themeConfig.sidebar) {
            dispatch(toggleSidebar());
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location]);

    return (
        <div className={semidark ? 'dark' : ''}>
            <nav
                className={`sidebar fixed min-h-screen h-full top-0 bottom-0 w-[260px] shadow-[5px_0_25px_0_rgba(94,92,154,0.1)] z-50 transition-all duration-300 ${semidark ? 'text-white-dark' : ''}`}
            >
                <div className="bg-white dark:bg-black h-full">
                    <div className="flex justify-between items-center px-4 py-3">
                        <NavLink to="/" className="main-logo flex items-center shrink-0">
                            <img className="w-8 ml-[5px] flex-none" src="/assets/images/logo.svg" alt="logo" />
                            <span className="text-2xl ltr:ml-1.5 rtl:mr-1.5 font-semibold align-middle lg:inline dark:text-white-light">{t('VRISTO')}</span>
                        </NavLink>

                        <button
                            type="button"
                            className="collapse-icon w-8 h-8 rounded-full flex items-center hover:bg-gray-500/10 dark:hover:bg-dark-light/10 dark:text-white-light transition duration-300 rtl:rotate-180"
                            onClick={() => dispatch(toggleSidebar())}
                        >
                            <IconCaretsDown className="m-auto rotate-90" />
                        </button>
                    </div>
                    <PerfectScrollbar className="h-[calc(100vh-80px)] relative">
                        <ul className="relative font-semibold space-y-0.5 p-4 py-0">
                            <li className="menu nav-item">
                                <button type="button" className={`${currentMenu === 'dashboard' ? 'active' : ''} nav-link group w-full`} onClick={() => toggleMenu('dashboard')}>
                                    <div className="flex items-center">
                                        <IconMenuDashboard
                                         className="group-hover:!text-primary shrink-0" />
                                        <span className="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">{t('dashboard')}</span>
                                    </div>

                                    <div className={currentMenu !== 'dashboard' ? 'rtl:rotate-90 -rotate-90' : ''}>
                                        <IconCaretDown />
                                    </div>
                                </button>

                               {/*  <AnimateHeight duration={300} height={currentMenu === 'dashboard' ? 'auto' : 0}>
                                    <ul className="sub-menu text-gray-500">
                                        <li>
                                            <NavLink to="/">{t('Ventas')}</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/admin/analytics">{t('Analisis')}</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/admin/finance">{t('Finanzas')}</NavLink>
                                        </li>
                                       
                                    </ul>
                                </AnimateHeight> */}
                            </li>

                            <h2 className="py-3 px-7 flex items-center uppercase font-extrabold bg-white-light/30 dark:bg-dark dark:bg-opacity-[0.08] -mx-4 mb-1">
                                <IconMinus className="w-4 h-5 flex-none hidden" />
                                <span>{t('apps')}</span>
                            </h2>

                            <li className="nav-item">
                                <ul>
                                    
                                    <li className="menu nav-item">
                                        <button type="button" className={`${currentMenu === 'servicios' ? 'active' : ''} nav-link group w-full`} onClick={() => toggleMenu('servicios')}>
                                            <div className="flex items-center">

                                                {/* <IconMenuInvoice className="group-hover:!text-primary shrink-0" />
                                                <span className="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">{t('servicios')}</span> */}
                                                <IconMenuWidgets className="group-hover:!text-primary shrink-0" />
                                                <span className="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">{t('servicios')}</span>


                                            </div>

                                            <div className={currentMenu !== 'servicios' ? 'rtl:rotate-90 -rotate-90' : ''}>
                                                <IconCaretDown />
                                            </div>
                                        </button>

                                        <AnimateHeight duration={300} height={currentMenu === 'servicios' ? 'auto' : 0}>
                                            <ul className="sub-menu text-gray-500">
                                                <li>
                                                    <NavLink to="/admin/services">{t('listar servcios')}</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to="/admin/services/create">{t('crear servicios')}</NavLink>
                                                </li>
                                               
                                            </ul>
                                        </AnimateHeight>
                                    </li>

                                    <li className="nav-item">
                                        <NavLink to="/apps/calendar" className="group">
                                            <div className="flex items-center">
                                                <IconMenuCalendar className="group-hover:!text-primary shrink-0" />
                                                <span className="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">{t('calendar')}</span>
                                            </div>
                                        </NavLink>
                                    </li>
                                </ul>
                            </li>

                           

                            
                          
                        </ul>
                    </PerfectScrollbar>
                </div>
            </nav>
        </div>
    );
};

export default Sidebar;
