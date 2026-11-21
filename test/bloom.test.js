import test from"node:test";import assert from"node:assert/strict";import{BloomFilter}from"../public/bloom.js";
test("inserted values are always reported as possibly present",()=>{const f=new BloomFilter(128,4);for(const x of ["alpha","beta","gamma"])f.add(x);for(const x of ["alpha","beta","gamma"])assert.equal(f.mightContain(x),true);});
test("an empty filter reports a negative",()=>{const f=new BloomFilter(64,3);assert.equal(f.mightContain("not-added"),false);});
test("validates filter parameters",()=>{assert.throws(()=>new BloomFilter(2,3),/Bit array size/);assert.throws(()=>new BloomFilter(64,0),/Hash count/);});
