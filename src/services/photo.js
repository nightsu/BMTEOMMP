

export function fetch() {
    let list=[];
    for(let i=0;i<10;i++){
        list.push({
            id:i,
            url:'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
            title:'example_'+i,
            tod:false
        })
    }
    return list;
}
