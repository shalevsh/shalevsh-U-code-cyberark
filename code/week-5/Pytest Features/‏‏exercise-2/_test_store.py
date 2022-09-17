from .primes import prime


def test_is_three_prime():
    assert prime.is_prime(3), "Test failed! the num isnt prime"

