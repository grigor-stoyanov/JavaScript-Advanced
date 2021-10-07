function solution(action) {
    switch (action) {
        case 'upvote':
            this.upvotes += 1

            break
        case 'downvote':
            this.downvotes += 1
            break
        case 'score':
            let score
            if (this.upvotes + this.downvotes > 50){
            score = [Math.round(this.upvotes*1.25),Math.round(this.downvotes*1.25),this.upvotes-this.downvotes,this.rating]
            }else{
            score = [this.upvotes,this.downvotes,this.upvotes-this.downvotes,this.rating]
            }
            return score
    }
    if (this.upvotes >= ((this.upvotes+this.downvotes)*2/3)){
        this.rating = 'hot'
    }else{
    if(this.upvotes - this.downvotes > 0 && this.downvotes+this.upvotes > 100){
        this.rating = 'controversial'
    }else{
        if(this.upvotes - this.downvotes < 0)[
            this.rating = 'unpopular'
        ]
    }
    }
    if (this.upvotes + this.downvotes < 10){
        this.rating = 'new'
    }
}

let post = {
    id: '3',
    author: 'emil',
    content: 'wazaaaaa',
    upvotes: 100,
    downvotes: 100
};
solution.call(post, 'upvote');
solution.call(post, 'downvote');
let score = solution.call(post, 'score'); // [127, 127, 0, 'controversial']
console.log(score)
for (let i = 0; i < 51; i++) {
    solution.call(post, 'downvote');
}         // (executed 50 times)
score = solution.call(post, 'score');   // [139, 189, -50, 'unpopular']
console.log(score)