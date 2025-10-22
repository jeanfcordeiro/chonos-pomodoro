import type React from 'react'
import styles from './styles.module.css'

type GenerickHtmlProps = {
    children: React.ReactNode;
}

export function GenericHtml({children}: GenerickHtmlProps) {
    return <div className={styles.genericHtml}>{children}</div>
}