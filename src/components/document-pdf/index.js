'use client'

import { Document, Page, Text, View } from "@react-pdf/renderer"
import { mapWorkDays } from "./mapper"
import style from './style'

function DocumentPdf({ info }) {
    const { client, fullname, currentMonth, nbrDays, activities } = info

    return (
        <Document>
            <Page style={ style.page } wrap size='A4' orientation="landscape">
                <View>
                    <Text style={ style.title }>COMPTE RENDU D’ACTIVITÉ MENSUEL</Text>
                    <Text style={ style.text }>Nom du client : { client }</Text>
                    <Text style={ style.text }>Nom / prénom du consultant : { fullname }</Text>
                    <Text style={ style.text }>Mois en cours : { currentMonth }</Text>
                </View>
                <View style={ style.workdays }>
                    { mapWorkDays(activities) }
                </View>
                <View>
                    <Text style={ style.text }>TOTAL JOURS TRAVAILLÉS : { nbrDays }</Text>
                </View>
                <View>
                    <Text style={ style.text }>{ fullname }</Text>
                    <Text>Signature : </Text>
                </View>
            </Page>
        </Document>
    )
}

export default DocumentPdf
