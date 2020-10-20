class Game {
    constructor(size){
        this.size = size;
        initializer()

        }
    }
    initializer(){
        this.gameState = {
            board: new Array(this.size).fill(0),
            score: 0,
            won: false,
            over: false
        }
        createTiles()
        createTiles()
    }

    createTiles(){ 
        let tile = 0
        if (Math.random() <=0.9){
            tile = 2
        }else{
            tile = 4
        }
        let freeSpace = []
        for (let i=0; i< this.gameState.board.length; i++){
            if (this.gameState.board[i] == 0){
                freeSpace.push(i)
            }
        }
        let position = math.floor(freeSpace.length*Math.random())
        this.gameState.board[freeSpace[position]] = tile  
    }
    // first to deal with left
    moveCol(direction){
        if(direction == "Left"){
            for(let i = 0; i < this.size; i++){
                
            }
        }
    }

    moveTile(direction, idx){
        if (this.gameState.board[idx] == 0){ return null}
        let leftBorder = idx-idx%this.size
        let rightBorder = leftBorder+this.size-1
        let upBorder = idx%this.size
        let downBorder = (this.gameState.board.length-1) - (rightBorder-idx)
        if(direction == "Left"){
            if(idx == leftBorder){ return null} // on the left border
            let left = idx
            for (let i = idx-1; i>= leftBorder; i--){
                if (this.gameState.board[i] == 0){ 
                    left = i
                }
                else{ //check merge
                    if (this.gameState.board[i] == this.gameState.board[idx]){
                        this.gameState.board[i] *= 2
                        this.gameState.board[idx] = 0 
                        return null
                    }
                    else if (left == idx){ 
                        return null
                    } // the tile can't be merged or moved'
                    else{
                        this.gameState.board[left] = this.gameState.board[idx]
                        this.gameState.board[idx] = 0 
                        return null
                    }
                }
            }
        }else if(direction == "Right"){
            if(idx == rightBorder){ return null} // on the left border    
            let right = idx
            for (let i = idx+1; i <=rightBorder; i++){
                if (this.gameState.board[i] == 0){ 
                    right = i
                }
                else{ //check merge
                    if (this.gameState.board[i] == this.gameState.board[idx]){
                        this.gameState.board[i] *= 2
                        this.gameState.board[idx] = 0 
                        return null
                    }
                    else if (right == idx){ 
                        return null
                    } // the tile can't be merged or moved'
                    else{
                        this.gameState.board[right] = this.gameState.board[idx]
                        this.gameState.board[idx] = 0 
                        return null
                    }
                }
            }
        }else if(direction == "Up"){
            if(idx == upBorder){ return null} // on the left border
            
            let up = idx
            for (let i = idx-self.size; i<= upBorder; i -= self.size){
                if (this.gameState.board[i] == 0){ 
                    up = i
                }
                else{ //check merge
                    if (this.gameState.board[i] == this.gameState.board[idx]){
                        this.gameState.board[i] *= 2
                        this.gameState.board[idx] = 0 
                        return null
                    }
                    else if (up == idx){ 
                        return null
                    } // the tile can't be merged or moved'
                    else{
                        this.gameState.board[up] = this.gameState.board[idx]
                        this.gameState.board[idx] = 0 
                        return null
                    }
                }
            }
        }else if(direction == "Down"){
            if(idx == downBorder){ return null} // on the left border
            
            let down = idx
            for (let i = idx+self.size; i<= downBorder; i += self.size){
                if (this.gameState.board[i] == 0){ 
                    down = i
                }
                else{ //check merge
                    if (this.gameState.board[i] == this.gameState.board[idx]){
                        this.gameState.board[i] *= 2
                        this.gameState.board[idx] = 0 
                        return null
                    }
                    else if (down == idx){ 
                        return null
                    } // the tile can't be merged or moved'
                    else{
                        this.gameState.board[down] = this.gameState.board[idx]
                        this.gameState.board[idx] = 0 
                        return null
                    }
                }
            }
        }


    }

        

    







}
