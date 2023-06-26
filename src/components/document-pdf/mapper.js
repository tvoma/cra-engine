import { Text, View } from "@react-pdf/renderer"
import style from './style'

const mapWorkDays = activities => activities.map((activity, index) =>
    <View key={ index } style={ style.workday } wrap={ false }>
        <Text style={ style.day }>{ activity.day }</Text>
        <Text>{ activity.worked ? 'X' : ' ' }</Text>
    </View>
)

export { mapWorkDays }
