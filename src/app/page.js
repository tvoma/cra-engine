'use client'

import { useState } from "react"
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer"
import DocumentPdf from "@/components/document-pdf"
import { getActivities, getCurrentMonth } from "./getter"
import { mapDays } from "./mapper"

function Home() {
    const [info, setInfo] = useState({
        client: '',
        fullname: '',
        nbrDays: 18,
        activities: getActivities(),
        currentMonth: getCurrentMonth()
    })

    const setCraInfo = ({ target }) => {
        const { name, value } = target
        setInfo(current => ({ ...current, [name]: value }))
    }

    return (
        <div>
            <p>{ info.currentMonth }</p>
            <form onChange={ setCraInfo }>
                <div>
                    <label>Nom du client</label>
                    <input type='text' name='client' defaultValue={ info.clientName } />
                </div>
                <div>
                    <label>Nom et prénom</label>
                    <input type='text' name='fullname' defaultValue={ info.fullname } />
                </div>
                <div>
                    <label>Nombre de jours travaillés</label>
                    <input type='number' name='nbrDays' defaultValue={ info.nbrDays } />
                </div>
                <div>{ mapDays(info.activities, setInfo) }</div>
                <PDFDownloadLink
                    document={ <DocumentPdf info={ info } /> } 
                    fileName="cra.pdf">
                    Generate
                </PDFDownloadLink>
            </form>
        </div>
    )
}

export default Home
