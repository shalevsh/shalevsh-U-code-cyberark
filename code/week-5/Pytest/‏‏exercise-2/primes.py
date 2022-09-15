def is_prime(number):
    flag = True
# prime numbers are greater than 1
    if number > 1:
        # check for factors
        for i in range(2, number):
            if (number % i) == 0:
                # if factor is found, set flag to True
                flag = False
            # break out of loop
                break
        return flag
    else:
        flag = False
        return flag


def are_prime_numbers(*args):
    flag = True
    for num in args:
        if (not is_prime(num)):
            flag = False
            break
    return flag
