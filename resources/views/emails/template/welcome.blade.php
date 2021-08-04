@component('mail::message')
Hello {{$user->username}}
@component('mail::panel')
    Your registration is successful
@endcomponent
Thanks,<br>
{{ config('app.name') }}
@endcomponent
