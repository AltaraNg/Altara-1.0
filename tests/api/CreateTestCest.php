<?php

class CreateTestCest
{
    public function _before(ApiTester $I)
    {
    }

    // tests
    public function checkTest(ApiTester $I)
    {
        $I->wantTo('To test that Codeception installed successfully');
        $I->expect('To See Test Run Successfully');
    }

}
