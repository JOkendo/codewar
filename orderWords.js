function order(words){
        return words.split(' ').sort(function(a,b){
          return a.match(/\d/) - b.match(/\d/);
        }).join(' ');
      }
console.log(order('Keny1a i3s marwa2'));
