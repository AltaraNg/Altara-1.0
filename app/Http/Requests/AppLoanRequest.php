<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class AppLoanRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            // 'repayment' => ['required', 'numeric'],
            'product_price' => ['required', 'numeric'],
            'down_payment' => ['required', 'numeric'],
            'fixed_repayment' => ['sometimes', 'boolean'],
            'credit_checker_verification_id' => ['required', 'integer', 'exists:credit_checker_verifications,id']
        ];
    }
}
