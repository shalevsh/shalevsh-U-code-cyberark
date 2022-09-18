import pytest


@pytest.fixture
def store():
    items = ("apple", "banana", "orange")
    amount = (2, 2, 1)
    return dict(zip(items, amount))


def buy_banana(store):
    store["banana"] -= 1


def buy_two_banana(store):
    store["banana"] -= 2


def test_buy_banana(store):
    buy_banana(store)
    assert store["banana"] == 1, "checks buy_banana function"


def test_buy_two_bananas(store):
    buy_two_banana(store)
    assert store["banana"] == 0, "checks buy_two_banana function"