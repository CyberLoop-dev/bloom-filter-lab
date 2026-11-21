function fnv(value){let h=0x811c9dc5;for(const b of new TextEncoder().encode(String(value))){h^=b;h=Math.imul(h,0x01000193)>>>0;}return h>>>0;}
function djb(value){let h=5381;for(const b of new TextEncoder().encode(String(value)))h=((h<<5)+h+b)>>>0;return h>>>0;}
export class BloomFilter{
  constructor(size=96,hashes=4){if(!Number.isInteger(size)||size<8||size>4096)throw new Error("Bit size must be between 8 and 4096.");if(!Number.isInteger(hashes)||hashes<1||hashes>12)throw new Error("Hash count must be between 1 and 12.");this.size=size;this.hashes=hashes;this.bits=new Uint8Array(size);this.inserted=new Set();}
  indexes(value){const a=fnv(value),b=(djb(value)|1)>>>0;return Array.from({length:this.hashes},(_,i)=>(a+Math.imul(i,b)+Math.imul(i*i,0x9e3779b1))>>>0).map(x=>x%this.size);}
  add(value){const key=String(value).trim();if(!key)throw new Error("Enter a non-empty value.");for(const i of this.indexes(key))this.bits[i]=1;this.inserted.add(key);return this.indexes(key);}
  mightContain(value){const key=String(value).trim();if(!key)throw new Error("Enter a non-empty value.");return this.indexes(key).every(i=>this.bits[i]===1);}
  estimatedFalsePositiveRate(n=this.inserted.size){return Math.pow(1-Math.exp(-this.hashes*n/this.size),this.hashes);}
  snapshot(){return Array.from(this.bits);}
}
