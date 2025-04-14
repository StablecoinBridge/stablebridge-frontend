import axios from "axios";

const stableCoinApi=axios.create({
     baseURL:"https://stablecoins.llama.fi"
})

export default stableCoinApi