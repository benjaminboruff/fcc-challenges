/*global expect*/
import {foo} from '../basic'

it("should work", () => {
    let x = foo();
    expect(x).toBe(4)
})