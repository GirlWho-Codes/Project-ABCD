
export function tableSearch(options = {
    searchTerm: '',
    properties: [],
    dataList: [],
}) {

    const { searchTerm, dataList } = options

    if (!searchTerm) return dataList;
    const result = dataList.filter(item => {
        if (typeof item !== 'object') {
            return ;
        }
        return Object.values(item).join('').toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
    })

    return result;
}