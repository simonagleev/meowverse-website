

const createToken = (x, y, z, group,bigIslandToken) => {
    
    if (bigIslandToken) {
        let coin = bigIslandToken.clone()
        coin.position.x = x
        coin.position.y = y
        coin.position.z = z
        
    }
}