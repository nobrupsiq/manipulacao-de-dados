import fetchData from "./fetchData.js";
async function handleData() {
    const data = await fetchData("https://api.origamid.dev/json/transacoess.json");
    if (data) {
        data.forEach((item) => {
            console.log(item["Cliente Novo"]);
        });
    }
}
handleData();
//# sourceMappingURL=script.js.map