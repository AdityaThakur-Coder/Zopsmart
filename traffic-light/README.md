## Write a function sum such that

## sum(1)(2)(3)(4)(5)() returns 15
## sum(3)(7)() returns 10 and so on


def sum(num=None):
    if num is None:
        return 0  # Initial call with no arguments
    total = num

    def inner(next_num=None):
        nonlocal total
        if next_num is None:  # Termination condition
            return total
        total += next_num
        return inner

    return inner


print(sum(1)(2)(3)(4)(5)())  
print(sum(3)(7)())           
