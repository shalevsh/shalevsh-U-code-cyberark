
# exersice 3

def get_prime_factors_generator(num):
    prime_factor = 2
    while num != 1:
        if (num % prime_factor == 0):
            yield prime_factor
            num /= prime_factor
        else:
            prime_factor += 1
            while (not is_prime(prime_factor)):
                prime_factor += 1


def is_prime(num):
    res = True
    if num > 1:
        for i in range(2, int(num/2)+1):
            if (num % i) == 0:
                res = False
                break
            else:
                res = True
        else:
            res = True
        return res


for x in get_prime_factors_generator(100):
    print(x)
