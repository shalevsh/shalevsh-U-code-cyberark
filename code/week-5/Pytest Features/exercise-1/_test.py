import pytest
def get_fibonacci_number_by_index(index):
    if index == 1:
        return 0
    elif index == 2:
        return 1
    else:
        return get_fibonacci_number_by_index(index-2)+get_fibonacci_number_by_index(index-1)


@pytest.mark.parametrize("index, fibonacci_number", [(1, 0), (2, 1), (3, 1), (5, 4), (16, 610)])
def test_fibonacci_func(index, fibonacci_number):
    assert get_fibonacci_number_by_index(
        index) == fibonacci_number, "checks the fibonacci function "