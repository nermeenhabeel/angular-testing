import { SqurePipe } from './squre.pipe';

describe('SqurePipe', () => {
  const pipe = new SqurePipe();
  it('create an instance', () => {   
    expect(pipe).toBeTruthy();
  });
  it('create an instance', () => {  
     const result=pipe.transform(4) 
    expect(result).toEqual(16);
  });
});
