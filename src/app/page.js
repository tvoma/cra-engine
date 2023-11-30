'use client'

import { useEffect, useState } from "react"
import { PDFDownloadLink } from "@react-pdf/renderer"
import DocumentPdf from "@/components/document-pdf"
import Field from "@/components/field"
import { getActivities, getCurrentMonth, getFilename } from "./getter"
import { mapDays } from "./mapper"
import { setCraInfo } from "./setter"

function Home() {
    const [isReady, setIsReady] = useState(false)
    const [info, setInfo] = useState({
        client: '',
        fullname: '',
        nbrDays: 0,
        activities: getActivities(),
        currentMonth: getCurrentMonth()
    })

    useEffect(() => {
        if (!isReady) setIsReady(true)
    }, [isReady])

    return (
        <div className='m-12'>
            <h1 className="text-3xl mb-6">Compte rendu d&apos;activité du mois de <span className="font-extrabold">{ info.currentMonth.toLowerCase() }</span></h1>
            <form onChange={ event => setCraInfo(event, setInfo) }>
                <div className="mx-auto flex w-full gap-6 mb-6">
                    <Field name='client' label='Nom du client' defaultValue={ info.clientName } placeholder='M. Jourdain, Company Ltd.'/>
                    <Field name='fullname' label='Nom et prénom' defaultValue={ info.fullname } placeholder='Doe John'/>
                    <Field type='number' name='nbrDays' label='Nombre de jours travaillés' value={ info.nbrDays } readOnly />
                </div>
                <div className="flex overflow-scroll gap-6 mb-6 text-center">{ mapDays(info.activities, setInfo) }</div>
                { isReady && 
                    <PDFDownloadLink
                        className="btn-rounded btn btn-secondary"
                        document={ <DocumentPdf info={ info } /> } 
                        fileName={ getFilename(info.fullname) }>
                        Generate
                    </PDFDownloadLink>
                }
            </form>
        </div>
    )
}

export default Home
