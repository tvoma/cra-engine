'use client'

import { useState } from "react"
import { PDFDownloadLink } from "@react-pdf/renderer"
import DocumentPdf from "@/components/document-pdf"
import Field from "@/components/field"
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
        <div className='m-12'>
            <h1 className="text-3xl mb-6">Compte rendu d&apos;activité du mois de <span className="font-extrabold">{ info.currentMonth.toLowerCase() }</span></h1>
            <form onChange={ setCraInfo }>
                <div className="mx-auto flex w-full gap-6 mb-6">
                    <Field name='client' label='Nom du client' defaultValue={ info.clientName } placeholder='M. Jourdain, Company Ltd.'/>
                    <Field name='fullname' label='Nom et prénom' defaultValue={ info.fullname } placeholder='Doe John'/>
                    <Field type='number' name='nbrDays' label='Nombre de jours travaillés' defaultValue={ info.nbrDays } />
                </div>
                <div className="flex justify-between mb-6">{ mapDays(info.activities, setInfo) }</div>
                <PDFDownloadLink
                    className="btn-rounded btn btn-secondary"
                    document={ <DocumentPdf info={ info } /> } 
                    fileName="cra.pdf">
                    Generate
                </PDFDownloadLink>
            </form>
        </div>
    )
}

export default Home
