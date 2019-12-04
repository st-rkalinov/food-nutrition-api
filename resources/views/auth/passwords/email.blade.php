@extends('layouts.app')

@section('content')
    <div class="bg-gray-100 h-full xl:p-16 lg:p-5 md:p-5 sm:p-0 p-0 flex justify-center items-center">
        <div class="lg:w-4/5 md:w-full sm:w-full w-full h-full p-10 relative bg-white form-wrapper z-0 rounded">
            <div class="h-full absolute top-0 bottom-0 -z-1 left-0 right-0"></div>
            <div class="z-10 sm:w-full md:w-2/5 pt-32">
                <h1 class="text-3xl text-black font-bold pb-4">Reset Password</h1>
                @if (session('status'))
                    <div class="alert alert-success" role="alert">
                        {{ session('status') }}
                    </div>
                @endif

                <form method="POST" action="{{ route('password.email') }}" class="pt-10">
                    @csrf
                    <div class="relative pt-5">
                        <label for="email"
                               class="absolute top-0 text-xs text-blue-300 font-bold">{{ __('E-Mail Address') }}</label>

                        <div>
                            <input id="email" type="email"
                                   class="focus:outline-none border-b-2 border-transparent focus:border-b-2 hover:shadow-xl p-3 w-full rounded @error('email') is-invalid @enderror"
                                   name="email"
                                   placeholder="your@email.com"
                                   value="{{ old('email') }}"
                                   required autocomplete="email" autofocus>

                            @error('email')
                            <span class="text-sm text-red-400 p-3" role="alert">
                                <strong>{{ $message }}</strong>
                            </span>
                            @enderror
                        </div>
                    </div>

                    <div class="flex justify-between items-center pt-10">
                        <div>
                            <a href="{{ route('login') }}">Login</a>
                        </div>
                        <div>
                            <a href="{{ route('register') }}">Register</a>
                        </div>
                    </div>
                    <div class="pt-16 text-center">
                        <button type="submit"
                                class="w-1/2 bg-gray-400 hover:bg-white hover:border hover:border-blue-800 py-2 px-3 text-left uppercase rounded text-blue-800 font-bold text-center">
                            Send Reset Email
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>

{{--
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">{{ __('Reset Password') }}</div>

                    <div class="card-body">
                        @if (session('status'))
                            <div class="alert alert-success" role="alert">
                                {{ session('status') }}
                            </div>
                        @endif

                        <form method="POST" action="{{ route('password.email') }}">
                            @csrf

                            <div class="form-group row">
                                <label for="email"
                                       class="col-md-4 col-form-label text-md-right">{{ __('E-Mail Address') }}</label>

                                <div class="col-md-6">
                                    <input id="email" type="email"
                                           class="form-control @error('email') is-invalid @enderror" name="email"
                                           value="{{ old('email') }}" required autocomplete="email" autofocus>

                                    @error('email')
                                    <span class="text-sm text-red-400 p-3" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                    @enderror
                                </div>
                            </div>


                            <div class="form-group row mb-0">
                                <div class="col-md-6 offset-md-4">
                                    <button type="submit" class="btn btn-primary">
                                        {{ __('Send Password Reset Link') }}
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
--}}
@endsection
