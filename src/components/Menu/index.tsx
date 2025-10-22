import { House, Settings, Sun, History, Moon  } from 'lucide-react';
import styles from './styles.module.css';
import { useState, useEffect } from 'react';

type AvailableThemes = 'dark' | 'light';

export function Menu() {
    const [theme, setTheme] = useState<AvailableThemes>(() => {
        const storageTheme = localStorage.getItem('theme') as AvailableThemes || 'dark';

        return storageTheme;
    });

    const nextThemeIcon = {
        dark:<Sun />,
        light:<Moon />
    }

    function handleThemeChange(
        event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    ){  
        event.preventDefault();      
        setTheme(prevTheme => {
            const nextTheme = prevTheme === 'dark' ? 'light' : 'dark';
            return nextTheme;
        });
        
        document.documentElement.setAttribute('data-theme', theme);
    }

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme)
    }, [theme]); // Executa apenas quando o calor de theme mudar;

    return  <nav className={styles.menu}>
                <a className={styles.menuLink} href="#" aria-label='Ir para home' title='Ir para home'>
                    <House />
                </a>
                <a className={styles.menuLink} href="#" aria-label='Ver histórico' title='Ver histórico'>
                    <History />
                </a>
                <a className={styles.menuLink} href="#" aria-label='Configurações' title='Configurações'>
                    <Settings />
                </a>
                <a className={styles.menuLink} href="#" aria-label='Mudar tema' title='Mudar tema' onClick={handleThemeChange}>
                    {nextThemeIcon[theme]}
                </a>
            </nav>;
}