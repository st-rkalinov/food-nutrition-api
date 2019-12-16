@extends('layouts.app')

@section('content')
    <div class="bg-gray-100 h-full xl:p-10 lg:p-5 md:p-5 sm:p-0 p-0 flex justify-center items-center">
        <div class="lg:w-4/5 md:w-full sm:w-full w-full h-full p-10 relative bg-white form-wrapper z-0 rounded">
            <div class="h-full absolute top-0 bottom-0 -z-1 left-0 right-0"></div>
            <div class="z-10 sm:w-full md:w-1/2 pt-16">
                <h1 class="text-3xl text-black font-bold pb-4">Join us</h1>

                <p>Enter your information below</p>

                <form method="POST" action="{{ route('register') }}" class="pt-10">
                    @csrf
                    <div class="relative pt-5">
                        <label for="name" class="absolute top-0 text-xs text-blue-300 font-bold">Name</label>

                        <div>
                            <input id="name" type="text"
                                   class="focus:outline-none border-b-2 p-3 w-full rounded @error('name') is-invalid @enderror"
                                   name="name"
                                   placeholder="Your Name"
                                   value="{{ old('name') }}"
                                   required autocomplete="name">

                            @error('name')
                            <span class="text-sm text-red-400 p-3" role="alert">
                                <strong>{{ $message }}</strong>
                            </span>
                            @enderror
                        </div>
                    </div>

                    <div class="relative pt-5 mt-3">
                        <label for="email" class="absolute top-0 text-xs text-blue-300 font-bold">Email Address</label>
                        <div class="">
                            <input id="email" type="email"
                                   class="focus:outline-none border-b-2 p-3 w-full rounded @error('email') is-invalid @enderror"
                                   placeholder="example@email.com"
                                   name="email" value="{{ old('email') }}"
                                   required autocomplete="email">
                            @error('email')
                            <span class="text-sm text-red-400 p-3" role="alert">
                                    <strong>{{ $message }}</strong>
                                </span>
                            @enderror
                        </div>
                    </div>

                    <div class="relative pt-5 mt-3">
                        <label for="password" class="absolute top-0 text-xs text-blue-300 font-bold">Password</label>
                        <div>
                            <input id="password" type="password"
                                   class="focus:outline-none border-b-2 p-3 w-full rounded @error('password') is-invalid @enderror"
                                   placeholder="************"
                                   name="password"
                                   autocomplete="current-password"
                                   required>
                            @error('password')
                            <span class="text-sm text-red-400 p-3" role="alert">
                                    <strong>{{ $message }}</strong>
                                </span>
                            @enderror
                        </div>
                    </div>

                    <div class="relative pt-5 mt-3">
                        <label for="password-confirm"
                               class="absolute top-0 text-xs text-blue-300 font-bold">{{ __('Confirm Password') }}</label>

                        <div class="col-md-6">
                            <input id="password-confirm" type="password"
                                   class="focus:outline-none border-b-2 p-3 w-full rounded"
                                   placeholder="************"
                                   name="password_confirmation"
                                   required autocomplete="new-password">
                        </div>
                    </div>

                    <div class="flex justify-between items-center pt-10">
                        <div>
                            <a href="{{ route('password.request') }}">Forgot Password ?</a>
                        </div>
                        <div>
                            <a href="{{ route('login') }}">Login</a>
                        </div>
                    </div>

                    <div class="pt-16 text-center">
                        <button type="submit"
                                class="w-1/2 bg-gray-400 hover:bg-white hover:border hover:border-blue-800 py-2 px-3 text-left uppercase rounded text-blue-800 font-bold text-center">
                            Register
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
@endsection
