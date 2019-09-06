var fourSumCount = function(A, B, C, D) {
    var indexCount =[];
    for(let i = 0;i<A.length;i++){
        if(B){
           for(let j =0;j<B.length;j++){
            if(C){
                 for(let n= 0;n<C.length;n++){
                     if(D){
                          for(let m =0;m<D.length;m++){
                            var sum =  A[i]+B[j]+C[n]+D[m] ;
                            if(sum == 0){
                             indexCount.push([i,j,n,m]);
                            }
                           }
                     }else{
                           var sum =  A[i]+B[j]+C[n] ;
                            if(sum == 0){
                             indexCount.push([i,j,n]);
                            }
                     }
               
                 }
            }else{
                 var sum =  A[i]+B[j];
                 if(sum == 0){
                    indexCount.push([i,j]);
                   }
            } 
        }  
        }else{
            var sum =  A[i];
             if(sum == 0){
                indexCount.push([i]);
               }  
        }
          
    }
    return indexCount.length;
};
