
/* 
Design a data structure that accepts a stream of integers and checks if it has a pair of integers that sum up to a particular value.

Implement the TwoSum class:

TwoSum() Initializes the TwoSum object, with an empty array initially.
void add(int number) Adds number to the data structure.
boolean find(int value) Returns true if there exists any pair of numbers whose sum is equal to value, otherwise, it returns false.
*/

class TwoSum{
    constructor(){
        this.values = [];
        this.sumSet = new Set();
    }
    
    add(num){
        for(const element of this.values){
            this.sumSet.add(element+num);
        };
        this.values.push(num);
    }
    find(num){
        return this.sumSet.has(num)
    }